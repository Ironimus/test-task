import { DEFAULT_BOOK_LIST } from './constants';

const respond = (data) => new Promise(resolve => setTimeout(() => resolve(data), 1000));

const fetch = async (urlString, request) => {
  const url = new URL(urlString);
  if(url.pathname === '/getbooks') {
    const bookArray = DEFAULT_BOOK_LIST
      .sort((a, b) => {
        const sortby = url.searchParams.get('sortby') || 'name';
        const order = url.searchParams.get('sortorder') === 'desc'
          ? -1
          : 1
        if(a[sortby] > b[sortby]) {
          return order;
        } else {
          return -order;
        }
      })
      .filter(book => {
        const searchParam = url.searchParams.get('search') || '';
        const searchQuery = searchParam.toLowerCase();
        if(searchQuery.length <= 2) {
          return true;
        }
        const name = book.name.toLowerCase();
        const author = book.author.toLowerCase();
        return name.includes(searchQuery) || author.includes(searchQuery)
      });
    return await respond({
      listLength: bookArray.length,
      bookArray: bookArray
        .slice(url.searchParams.get('from'), url.searchParams.get('to'))
    });
  }

  if(url.pathname === '/getbook') {
    return await respond(DEFAULT_BOOK_LIST
      .find(book => book.id === +url.searchParams.get('id'))
    );
  }

  if(url.pathname === '/changebook') {
    const index = DEFAULT_BOOK_LIST.findIndex(book =>
      book.id === +url.searchParams.get('id')
    );
    DEFAULT_BOOK_LIST[index] = request.body;
    return await respond(DEFAULT_BOOK_LIST[index]);
  }
}

export default fetch;