module NavHelpers

  # Builds the flat array of all articles
  def getArticles(parent, arr)
    arr << {title: parent.title, path: parent.path }
    parent.articles.each do |a|
      if a.articles
        getArticles(a, arr)
      end
      arr << { title: a.title, path: a.path }
    end

    arr.flatten.uniq.delete_if { |h| h[:path].nil? }
  end

  # Helps to builds the previous article link
  def get_prev_article(current_article_path)
    articles = getArticles(data.contents, [])
    index = articles.find_index {|a| a[:path] == current_article_path}
    index == 0 ? nil : articles[index - 1]
  end

  # Helps to builds the next article link
  def get_next_article(current_article_path)
    articles = getArticles(data.contents, [])
    index = articles.find_index {|a| a[:path] == current_article_path}
    index == articles.count - 1 ? nil : articles[index + 1]
  end


  # Finds the default version of project
  def getDefaultVersion(project)
    default_version = data[project].versions.find { |v| v["default"] = true }
    return default_version.version
  end

  # Finds the current version of the project being viewed
  def getVersion(current_page_url)
    project = current_page.data.project
    if /^\/[a-zA-Z0-9]+\/([0-9.]+)\//.match(current_page.url)
      return /^\/[a-zA-Z0-9]+\/([0-9.]+)\//.match(current_page.url).captures.first
    else
      return getDefaultVersion(project)
    end
  end

end
