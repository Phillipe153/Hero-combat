async function getHero() {
    const heroEndPoint = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';
    const response = await fetch(heroEndPoint);
    const results  = await response.json();
    return results;
  }
  
  export default getHero;