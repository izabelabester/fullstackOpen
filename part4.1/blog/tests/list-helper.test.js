/* eslint-disable no-unused-vars */

import { test, describe } from 'node:test'
import assert from 'node:assert'
import listHelper from '../utils/list-helper.js'

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })
})
  //4.5*
  describe('mostLikedBlog', () => {  
    test('find the blog entry with the most likes', () => {
      const result = listHelper.mostLikedBlog(blogs)
      const expectedResult = { title: 'Canonical string reduction', author: 'Edsger W. Dijkstra', likes: 12 }
      assert.deepStrictEqual(result, expectedResult)
    })
  })

  //4.6*
  describe('authorWithMostBlogs', () => {  
    test('find the author with the highest amount of likes across their entries', () => {
      const result = listHelper.authorWithMostBlogs(blogs)
      const expectedResult = { author: 'Robert C. Martin', blogs: 3 }
      assert.deepStrictEqual(result, expectedResult)
    })
  })

  //4.7*
  describe('mostLikedAuthor', () => {  
    test('find the author with the highest amount of likes across their entries', () => {
      const result = listHelper.mostLikedAuthor(blogs)
      const expectedResult = { author: 'Edsger W. Dijkstra', likes: 17 }
      assert.deepStrictEqual(result, expectedResult)
    })
  })




  // mostLikedBlog, mostLikedAuthor, authorWithMostBlogs


