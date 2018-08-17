export const HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  //delay padrão
  const DELAY_MS = 500;

  //Delay para simular o tempo de processamento a algum serviço
  const delay = ms => new Promise(resolve => setTimeout(resolve,ms));
  
  export const fetchHeroes = () => delay(DELAY_MS).then(() => HEROES.slice());
  export const fetchHeroById = (id) => delay(DELAY_MS).then(() => HEROES.filter(hero => ''+hero.id === id));