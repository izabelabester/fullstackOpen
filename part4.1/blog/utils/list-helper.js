/* eslint-disable no-unused-vars */

const dummy = (array) => {
    return 1
}

const totalLikes = (list) => {
    const reducer = (sum, item) => {
      return sum + item.likes
    }
    return list.length === 0 ? 0 : list.reduce(reducer, 0)
  }

  const mostLikedBlog = (blogs) => {
    if (blogs.length === 0) {
        return null; // Return null if the array is empty
    }

    return formatMostLikedBlog(blogs.reduce((maxLiked, currentBlog) => {
        return currentBlog.likes > maxLiked.likes ? currentBlog : maxLiked;
    }, blogs[0]));
}

const formatMostLikedBlog = (blog) => {
    return {
        title: blog.title,
        author: blog.author,
        likes: blog.likes
    }
}

const mostLikedAuthor = (blogs) => {
    const authorLikes = {};

    blogs.forEach(blog => {
        if (authorLikes[blog.author]) {
            authorLikes[blog.author] += blog.likes;
        } else {
            authorLikes[blog.author] = blog.likes;
        }
    });

    let mostLikedAuthor = { author: null, likes: 0 };

    for (const author in authorLikes) {
        if (authorLikes[author] > mostLikedAuthor.likes) {
            mostLikedAuthor.author = author;
            mostLikedAuthor.likes = authorLikes[author];
        }
    }

    return mostLikedAuthor;
}

const authorWithMostBlogs = (blogs) => {
    const authorCounts = {};

    blogs.forEach(blog => {
        if (authorCounts[blog.author]) {
            authorCounts[blog.author]++;
        } else {
            authorCounts[blog.author] = 1;
        }
    });

    let mostBlogsAuthor = { author: null, blogs: 0 };

    for (const author in authorCounts) {
        if (authorCounts[author] > mostBlogsAuthor.blogs) {
            mostBlogsAuthor.author = author;
            mostBlogsAuthor.blogs = authorCounts[author];
        }
    }

    return mostBlogsAuthor;
}

export default {
    dummy,
    totalLikes,
    mostLikedBlog,
    mostLikedAuthor,
    authorWithMostBlogs
}
