const btn1 = document.querySelector('ul .button')

btn1.addEventListener('click', ()=>{
    setTimeout(() => {
        document.querySelector('.first').style.display = "none";
        document.querySelector('.second').style.display = "block";
    }, 700);
})

document.querySelector('.loader').style.display = "none";
document.querySelector('.first').style.display = "block";
document.querySelector('.second').style.display = "none";
document.querySelector('.three').style.display = "none";
document.querySelector('.four').style.display = "none";

const interests = [
    "AI", "Aktorstwo", "Akwarystyka", "Alchemia", "Altcoin", "Amatorskie radio", "Analiza danych", "Anatomia",
    "Animacja", "Anime", "Antropologia", "Architektura", "Arduino", "Astronomia", "Astrofizyka", "Autografy",
    "Badminton", "Bajki", "Balkonowe ogrodnictwo", "Baseball", "Basketball", "Beatbox", "Bieganie", "Biologia",
    "Biotechnologia", "Biznes", "Blogowanie", "Board games", "Boks", "Botanika", "Breakdance", "Budownictwo",
    "Bungee", "Calligraphy", "Camping", "Ceramika", "Chemia", "Chess", "Chirurgia", "Ciasteczka", "Ciekawostki",
    "Cinematografia", "Coding", "Cosplay", "Crossfit", "Cukiernictwo", "Czasopisma", "Czarne dziury", "Cyberbezpieczeństwo",
    "Czas wolny", "Części komputerowe", "Czytanie", "Dart", "Design", "DIY", "DJ-ing", "Dokumenty", "Domowe spa",
    "Drony", "Druk 3D", "Ekonomia", "Ekologia", "Elektronika", "E-mail marketing", "Etyka", "E-sport", "Fantasy",
    "Felietony", "Film", "Filozofia", "Finanse", "Fitness", "Flora", "Fotografia", "Fotomontaż", "Freelancing",
    "Fryzjerstwo", "Futurologia", "Gaming", "Genealogia", "Geografia", "Geologia", "Gimnastyka", "Gitara",
    "Glina", "Gotowanie", "Graffiti", "Gry bitewne", "Gry fabularne", "Gry komputerowe", "Gry planszowe", "Gry retro",
    "Gry RPG", "Gry wideo", "Haft", "Historia", "Hodowla roślin", "HTML/CSS", "Humanistyka", "Hydrologia", "Ilustracja",
    "Informatyka", "Instagram", "Instrumenty", "Inteligencja emocjonalna", "Interfejsy", "Investycje", "IOT", "Japonia",
    "Jazda konna", "Jazda na rolkach", "Języki obce", "Jogging", "Joga", "Kajakarstwo", "Kalistenika", "Kamienie szlachetne",
    "Karaoke", "Kartografia", "Karuzelowanie (IG)", "Kawy świata", "Kemping", "Kino", "Kitesurfing", "Kitesztuka", "Klasyka",
    "Kluby książki", "Kodowanie", "Kolorowanki", "Komedia", "Komiksy", "Komunikacja", "Koncerty", "Kosmetyka", "Kosmos",
    "Koszykówka", "K-pop", "Krawiectwo", "Kreatywne pisanie", "Krewetki akwariowe", "Książki", "Kultura", "Kwiaty", "Lalkarstwo",
    "Latanie dronami", "Lego", "LGBTQ+", "Linguistyka", "Listy", "Literatura", "Logika", "Lokalne podróże", "Lutnictwo", "Makijaż",
    "Malowanie", "Manga", "Mapy", "Marketing", "Marketing cyfrowy", "Matematyka", "Mechanika", "Medytacja", "Memologia", "Meteorologia",
    "Minimalizm", "Modelarstwo", "Moda", "Motoryzacja", "Mountaineering", "Mowy motywacyjne", "Muzyka", "Myślenie wizualne",
    "Narciarstwo", "Nauka", "Netflix", "Nurkowanie", "Ogrody", "Ogrodnictwo", "Origami", "Organizacja czasu", "Painting",
    "Parkour", "Pasja do kawy", "Perfumy", "Pet sitting", "Pianino", "Pierwsza pomoc", "Piosenki", "Pisanie książek", 
    "Pisanie poezji", "Pisanie scenariuszy", "Piwowarstwo domowe", "Pixel art", "Plakatowanie", "Podcasty", "Podróże", 
    "Poetyka", "Połowy ryb", "Popkultura", "Programowanie", "Projekty DIY", "Przemówienia", "Przygotowanie CV", 
    "Przyroda", "Psy", "Psychologia", "Public relations", "Puzzle", "Rasowe koty", "Rasowe psy", "Rękodzieło", 
    "Reklama", "Relacje międzyludzkie", "Relaksacja", "Retro technologie", "Robotyka", "Rock", "Rolnictwo", 
    "Rolki", "RPG", "Rysowanie", "Samochody", "Samodoskonalenie", "Satysfakcja z pracy", "Scrapbooking", 
    "SEO", "Seriale", "Siłownia", "Sitodruk", "Skalniaki", "Skateboarding", "Skrzypce", "Smart Home", 
    "Sneakersy", "Social media", "Socjologia", "Sport", "Stand-up", "Startupy", "Statystyka", "Storytelling", 
    "Strzelectwo", "Sztuka", "Szachy", "Szermierka", "Szkoła przetrwania", "Szydełkowanie", "Szyfrowanie", 
    "Taniec", "Tatuaże", "Technologia", "Teatr", "TikTok", "Trening mentalny", "Triathlon", "Tuning", "Turystyka",
    "Twitch", "Tworzenie aplikacji", "Tworzenie gier", "Układanie puzzli", "Urbanistyka", "UX/UI", "Veganizm", 
    "VFX", "Video editing", "Vlogging", "VR", "Wędrówki", "Wędkarstwo", "Web design", "Web development", 
    "Wirtualna rzeczywistość", "Wnętrza", "Wolontariat", "Wspinaczka", "Wydruk 3D", "Wypieki", "Wzornictwo",
    "YouTube", "Zarządzanie", "Zdjęcia z drona", "Zdrowie", "Zioła", "Zwierzęta", "Zwinne metody pracy", 
    "Zrównoważony styl życia"
  ];
  







  

  const container = document.getElementById("chipContainer");
  const searchInput = document.getElementById("search");
  const addButton = document.createElement("button");
  addButton.classList.add('addButton');
  addButton.textContent = "Dodaj frazę";
  addButton.style.display = "none";  // Na początku przycisk jest ukryty
  document.body.appendChild(addButton);
  
  
  // Tablica przechowująca zaznaczone frazy
  let selectedChips = [];
  
  // Funkcja renderująca chipy
  function renderChips(filter = "") {
    container.innerHTML = "";
  
    // Sortowanie listy alfabetycznie przed renderowaniem
    const sortedInterests = interests.sort((a, b) => a.localeCompare(b));
  
    sortedInterests
      .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
      .forEach(item => {
        const span = document.createElement("span");
        span.className = "chip";
        span.textContent = item;
  
        // Dodajemy zaznaczenie do chipa, jeśli jest w tablicy selectedChips
        if (selectedChips.includes(item)) {
          span.classList.add("selected");
        }
  
        span.addEventListener("click", () => {
          span.classList.toggle("selected");
  
          // Dodajemy lub usuwamy frazę z tablicy selectedChips
          if (span.classList.contains("selected")) {
            selectedChips.push(item);
            if(selectedChips.length >= 5){
              nextButton.classList.add("active");
            }
            nextButton.textContent =  selectedChips.length +"/5";
          } else {
            selectedChips = selectedChips.filter(selectedItem => selectedItem !== item);
            nextButton.textContent = selectedChips.length +"/5";
            if(selectedChips.length < 5){
              nextButton.classList.remove("active");
            }
          }
        });
        container.appendChild(span);
      });
  }
  
  searchInput.addEventListener("focus", () => {
    container.classList.add("input-focused");
  });
  
  searchInput.addEventListener("blur", () => {
    container.classList.remove("input-focused");
  });
  
  // Nasłuch na zmianę w polu wyszukiwania
  searchInput.addEventListener("input", () => {
    renderChips(searchInput.value);
  
    const inputValue = searchInput.value.trim().toLowerCase();
  
    // Szukamy podobnych słów w liście `interests`
    const similar = interests.some(interest => interest.toLowerCase().includes(inputValue));
  
    // Jeśli nie znaleziono podobnych słów, pokazujemy przycisk
    if (inputValue !== "" && !similar) {
      addButton.style.display = "inline-block";
    } else {
      addButton.style.display = "none";
    }
  });
  
  // Dodaj frazę po kliknięciu przycisku
  addButton.addEventListener("click", () => {
    const inputValue = searchInput.value.trim();
  
    // Jeśli fraza jest nowa, dodajemy ją do listy i DOM
    if (inputValue !== "" && !interests.includes(inputValue)) {
      interests.push(inputValue); // Dodajemy frazę do tablicy
  
      // Sortowanie listy alfabetycznie po dodaniu nowej frazy
      interests.sort((a, b) => a.localeCompare(b));
  
      // Dodajemy frazę do listy w DOM
      renderChips(searchInput.value); // Ponownie renderujemy chipy z nową frazą

      addButton.style.display = "none"; // Ukrywamy przycisk
    }
  });
  
  // Załaduj chipy przy starcie
  renderChips();
  

  // Przyciski
const nextButton = document.querySelector(".nextButton");
nextButton.textContent = "Idź dalej";

nextButton.addEventListener('click', ()=>{
  document.querySelector('.second').style.display = "none";
        document.querySelector('.three').style.display = "block";
})
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // zapobiega przeładowaniu strony
  // Twoje akcje tutaj
});

document.querySelector('.skibidi').addEventListener('click', ()=>{
  document.querySelector('.three').style.display = "none";
  document.querySelector('.loader').style.display = "flex";
  setTimeout(() => {
    document.querySelector('.loader').style.display = "none";
    document.querySelector('.four').style.display = "block";
}, 4000);
})

navigator.serviceWorker.register('sw.js')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('ServiceWorker zarejestrowany:', registration.scope);
      }, function(err) {
        console.log('Błąd rejestracji ServiceWorker:', err);
      });
  });
}
