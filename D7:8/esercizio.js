const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]
  
  







  
  // creo la funzione
  function jobFinder (titolo , posizione){
      
      // come prima cosa definisco l' output finale 
      let risultato ={
          result : [],
          count : 0,
      } 
  // uso un for...loop per dichiarare i lavori nellárray 'jobs''
    for (let i = 0; i< jobs.length; i++) {
        const lavori = jobs[i];
        // ora impongo a due nuove variabili di essere çase insensitive''
        const titoloLavori = lavori.title.toLowerCase();
        const posizioneLavori = lavori.location.toLowerCase();

        //console.log("titoloLavoro:", titoloLavori);
        //console.log("posizioneLavoro:", posizioneLavori);

        // ora con la condizione if verifico che titolo e posizione siano presenti nelle nuove variabili
        if (titoloLavori.includes(titolo.toLowerCase()) && posizioneLavori.includes(posizione.toLowerCase())){
            risultato.result.push(lavori);// se la condizione soddisfa i requisiti verranno aggiunti i lavori dell'array jobs a 'result'
            risultato.count++ ;
        }
    }
   //console.log("risultato" , risultato)
    return risultato;
}
//jobFinder("Marketing", "New York");
// ora passo alla parte 2
 document.getElementById('search-button').addEventListener('click', () =>{
  // collego i due input type del mio HTML creando queste due nuove variabili
   let titolo = document.getElementById('job-location').value;
   let location = document.getElementById('job-position').value;
    // uso la funzione creata nella parte 1 
   const risultati = jobFinder(titolo , location);
   console.log(risultati);
    //creo la lista finale
   let listaFinale = document.getElementById ('list-results')
   listaFinale.innerHTML = "";
    // uso il ciclo for per la lista come consigliato nella prefazione dell'esercizio
   for (let i = 0; i < risultati.result.length; i++) {
     const lavoro = risultati.result[i];
      // ora vado ad inniettare nel mio HTML i nuovi elementi 'li'usando javascript
     let li = document.createElement("li");
     li.textContent = `${lavoro.title} @ ${lavoro.location}`;
     listaFinale.appendChild(li);

    
   }

 })
//  FINE