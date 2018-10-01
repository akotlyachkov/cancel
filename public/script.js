$(function () {
  let $result = $('.result');
  let pending = {};
  
  
  $('.req1').click(e => {
    requestCancelable({url: '/api/req1', method: 'get'})
      .then(response => {
        $result.append('<div>req1 done</div>');
      })
      .catch(err => {
        $result.append('<div>req1 err</div>');
      });
    requestCancelable({url: '/api/req2', method: 'get'})
      .then(response => {
        $result.append('<div>req2 done</div>');
      })
      .catch(err => {
        $result.append('<div>req2 err</div>');
      })
  });
  $('.req2').click(e => {
    requestCancelable({url: '/api/req1', method: 'get'})
      .then(response => {
        $result.append('<div>req1 done</div>');
      })
      .catch(err => {
        $result.append('<div>req1 err</div>');
      });
    requestCancelable({url: '/api/req2', method: 'get'})
      .then(response => {
        $result.append('<div>req2 done</div>');
      })
      .catch(err => {
        $result.append('<div>req2 err</div>');
      })
  });
  
  function requestCancelable(options) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    let url = options.url;
    if (pending[url]) pending[url].cancel('user cancel');
    pending[url] = source;
    options.cancelToken = source.token;
    
    return new Promise((resolve, reject) => {
      axios(options).then(resp => {
        delete pending[url];
        resolve(resp)
      }).catch(err => reject(err))
    })
    
  }
});


