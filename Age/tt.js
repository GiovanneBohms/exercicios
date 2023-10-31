async function tt(){
  const promisse = await fetch("https://twitter.com/search?q=agetransp&src=typed_query");
  const texto = await promisse.json();
  
  console.log(texto);
}

async function ttapi(id, name){
  const url = `https://twitter.com/search?q=agetransp&src=typed_query`;
  const headers = {
    "Cache-Control": "no-cache, no-store, must-revalidate, pre-check=0, post-check=0",
    "Content-Length": "0",
    "Date": "Tue, 31 Oct 2023 02:50:51 GMT",
    "Expires": "Tue, 31 Mar 1981 05:00:00 GMT",
    "Last-Modified": "Tue, 31 Oct 2023 02:50:52 GMT",
    "Perf": "7626143928",
    "Pragma": "no-cache",
    "Server": "tsa_b",
    "Strict-Transport-Security": "max-age=631138519",
    "X-Connection-Hash": "7eb36096d66f375ba3463082e34abf2305ac2a31f2dff7aef8084170e5a448d5",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Response-Time": "18",
    "X-Transaction": "3133dd4feb61cdec",
    "X-Transaction-Id": "3133dd4feb61cdec",
    "X-Twitter-Response-Tags": "BouncerCompliant",
    "X-Xss-Protection": "0"
          };
  const requestOptions = {
    method: 'GET',
    headers: headers,
  };

   try {
      let promessa = await fetch(url, requestOptions)
      let stringVolatilidade = await promessa.text();
      console.log(stringVolatilidade)
      return stringVolatilidade
  } catch(error) {
      console.log('erro em ttapi')
      return null

}
}

ttapi();