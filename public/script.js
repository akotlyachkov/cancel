$(function () {
  let $result = $('.result');
  const CancelToken = axios.CancelToken;

  let pending = {};
  $('.req1').click(e => {
    const source = CancelToken.source();
    if(pending['/api/req1']) pending['/api/req1'].cancel('user cancel');
    pending['/api/req1'] = source;
    axios.get('/api/req1', {cancelToken: source.token})
      .then(response => {
        delete pending['/api/req1'];
        $result.append('<div>req1 done</div>');
      }).catch(err=>{})
  });
  $('.req2').click(e => {
    const source = CancelToken.source();
    if(pending['/api/req2']) pending['/api/req2'].cancel('user cancel');
    pending['/api/req2'] = source;
    axios.get('/api/req2', {cancelToken: source.token})
      .then(response => {
        delete pending['/api/req2'];
        $result.append('<div>req2 done</div>');
      }).catch(err=>{})
  })

});