import test from 'ava'
import { getColumnDefinitions } from '../src/columns.js'
import iris from './fixtures/iris.json' assert { type: 'json' }
import books from './fixtures/books.json' assert { type: 'json' }

test('it outputs column definition for iris dict', t => {
  const expected = [
    {
      field: 'sepal_length',
      title: 'Sepal.Length',
      editor: 'number'
    },
    {
      field: 'sepal_width',
      title: 'Sepal.Width',
      editor: 'number'
    },
    {
      field: 'petal_length',
      title: 'Petal.Length',
      editor: 'number'
    },
    {
      field: 'petal_width',
      title: 'Petal.Width',
      editor: 'number'
    },
    {
      field: 'species',
      title: 'Species',
      editor: 'list',
      editorParams: {
        autocomplete: true,
        multiselect: false,
        values: ['setosa', 'versicolor', 'virginica']
      }
    }
  ]
  const columnDefinitions = getColumnDefinitions(iris)

  t.deepEqual(columnDefinitions.length, expected.length)
  t.deepEqual(columnDefinitions, expected)
})

test('it outputs column definition for books dict', t => {
  const expected = [
    {
      field: 'title',
      title: 'Title'
    },
    {
      field: 'author',
      title: 'Author'
    },
    {
      field: 'cover',
      title: 'Cover',
      formatter: 'image',
      formatterParams: {
        height: '150px'
      }
    }
  ]
  const columnDefinitions = getColumnDefinitions(books)

  t.deepEqual(columnDefinitions.length, expected.length)
  t.deepEqual(columnDefinitions, expected)
})
