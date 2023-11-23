async function getHero() {
    const heroEndPoint = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';
    const response = await fetch(heroEndPoint);
    // console.log(response);
    const results  = await response.json();
    // results.map((e) => console.log(e));
    return results;
  }
  
  export default getHero;