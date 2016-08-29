module NavHelpers

  # Builds the flat array of all articles

  # Flattens a project array
  def flatten_array(array)
    new_array = {}
    new_array['articles'] = []
    array['articles'].each do |a|
      new_array['articles'] << {name: a.name, path: a.path}
      if a.articles
        new_array['articles'] += flatten_array(a)['articles']
      end
    end
    new_array
  end

  # Helps to builds the previous article link
  def get_prev_article(current_article_path)
    root = data[current_page.data.project].root
    articles = flatten_array(data[current_page.data.project])
    index = articles['articles'].find_index {|a| a[:path] == current_page.url.gsub(root, '')}
    if index == 0
      return nil
    else
      return articles['articles'][index - 1]
    end
  end

  # Helps to builds the next article link
  def get_next_article(current_article_path)
    root = data[current_page.data.project].root
    articles = flatten_array(data[current_page.data.project])
    index = articles['articles'].find_index {|a| a[:path] == current_page.url.gsub(root, '')}
    if index == articles['articles'].count - 1
      return nil
    else
      return articles['articles'][index + 1]
    end
  end

################ Version Helpers ##############

  # Finds the default version of project
  def getDefaultVersion(project)
    default_version = data[project].versions.select { |v| v.default? }
    return default_version.first["version"]
  end

  # Finds the current version of the project being viewed
  def getVersion(current_page_url)
    project = current_page.data.project
    if /^\/[a-zA-Z0-9\-]+\/([0-9.]+)\//.match(current_page.url)
      return /^\/[a-zA-Z0-9\-]+\/([0-9.]+)\//.match(current_page.url).captures.first
    else
      return getDefaultVersion(project)
    end
  end

  # Helps to builds the previous article link for versioned projects
  def version_get_prev_article(current_article_path)
    page_version = getVersion(current_page.url)
    page_default_version = getDefaultVersion(current_page.data.project)
    root = data[current_page.data.project].root

    if page_version == page_default_version
      articles = flatten_array(data[current_page.data.project])
      index = articles['articles'].find_index {|a| a[:path] == current_page.url.gsub(root, '')}
    else
      articles = flatten_array(data[current_page.data.project].versions.find { |v| v['version'] = page_version })
      index = articles['articles'].find_index {|a| a[:path] == current_page.url.gsub(root+page_version+'/', '')}
    end
    if index == 0
      return nil
    else
      return articles['articles'][index - 1]
    end
  end

  # Helps to builds the next article link for versioned projects
  def version_get_next_article(current_article_path)
    page_version = getVersion(current_page.url)
    page_default_version = getDefaultVersion(current_page.data.project)
    root = data[current_page.data.project].root
    
    if page_version == page_default_version
      articles = flatten_array(data[current_page.data.project])
      index = articles['articles'].find_index {|a| a[:path] == current_page.url.gsub(root, '')}
    else
      articles = flatten_array(data[current_page.data.project].versions.find { |v| v['version'] = page_version })
      index = articles['articles'].find_index {|a| a[:path] == current_page.url.gsub(root+page_version+'/', '')}
    end
    if index == articles['articles'].count - 1
      return nil
    else
      return articles['articles'][index + 1]
    end
  end

end
