<div className="App">
        {!show && <button className="button-adj" onClick={openModal}>Add a Movie</button>}
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <form className="Todo-input" onSubmit={handleSubmitName}  >
           name:<input className="write-your-input" type="text" placeholder="Todo ?..." value={title} required onChange={(props)=> setTitle(props.target.value)}/>
           description:<input className="write-your-input" type="text" placeholder="Todo ?..." value={description} required onChange={(props)=> setDescription(props.target.value)}/>
           rating:<input className="write-your-input" type="text" placeholder="Todo ?..." value={rating} required onChange={(props)=> setRating(props.target.value)}/>
           image:<input className="write-your-input" type="text" placeholder="Todo ?..." value={image} required onChange={(props)=> setImage(props.target.value)}/>
           trailer:<input className="write-your-input" type="text" placeholder="Todo ?..." value={video} required onChange={(props)=> setVideo(props.target.value)}/>
           <input type="submit"></input>
        </form>
      </div>
      </div>




/***********************************************************************************************************************************************/



import React,{ useState } from "react";
import './App.css'
import RootComponent from './RootComponent'
import MovieModel from './components/MovieModel'

function App() {
  const MovieInfos = [
    {name:"-Maze Runner-",
    rating: 3,
    description:"Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.",
  image:"https://lh3.googleusercontent.com/V3W_1uLiraX9RdqmRYI7SCYgI8UgK80Ta_95OmCfGrQYhJxjLwy55ggja_2AEE77h76oCg",video:"https://www.youtube.com/embed/64-iSYVmMVY"},
  {name:"-Maze Runner: The scorch trials-",
    rating: 3,
    description:"After having escaped the Maze, the Gladers now face a new set of challenges on the open roads of a desolate landscape filled with unimaginable obstacles.",
  image:"https://m.media-amazon.com/images/M/MV5BMjE3MDU2NzQyMl5BMl5BanBnXkFtZTgwMzQxMDQ3NTE@._V1_.jpg",video:"https://www.youtube.com/embed/SDofO3P2HpE"},
  {name:"-Maze Runner: Death Cure-",
    rating: 3,
    description:"Young hero Thomas embarks on a mission to find a cure for a deadly disease known as The Flare.",
  image:"https://upload.wikimedia.org/wikipedia/en/e/eb/MazeRunnerDeathCureFinalPoster.jpeg",video:"https://www.youtube.com/embed/4-BTxXm8KSg"},
    {name:"-THE END GAME-",
    rating: 4,
    description:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  image:"https://images-na.ssl-images-amazon.com/images/I/91xPEyDUNcL._AC_SL1500_.jpg",video:"https://www.youtube.com/embed/TcMBFSGVi1c"},
  {name:"-Joker-",
    rating: 4,
    description:"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime",
  image:"https://img6.cdn.cinoche.com/images/2410039474f50c57115d6e6f97302965.jpg",video:"https://www.youtube.com/embed/zAGVQLHvwOY"},
  {name:"-The GodFather-",
    rating: 5,
    description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",video:"https://www.youtube.com/embed/sY1S34973zA"},
  {name:"-The GodFather 2-",
    rating: 5,
    description:"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8Hn_NlQp2MC1X_kQd49MHo4ooqUkpYwequA&usqp=CAU",video:"https://www.youtube.com/embed/9O1Iy9od7-A"},
  {name:"-The GodFather 3-",
    rating: 4,
    description:"In the midst of trying to legitimize his business dealings in New York City and Italy in 1979, aging Mafia Don Michael Corleone seeks to avow for his sins.",
  image:"https://m.media-amazon.com/images/M/MV5BNTc1YjhiNzktMjEyNS00YmNhLWExYjItZDhkNWJjZjYxOWZiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",video:"https://www.youtube.com/embed/z8h3LVb8cl8"},
  {name:"-The irish Man-",
    rating: 4,
    description:"An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.",
  image:"https://fr.web.img5.acsta.net/pictures/19/09/18/09/17/1349272.jpg",video:"https://www.youtube.com/embed/WHXxVmeGQUc"},
  
  ];
  const [newMovies, setNewMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  

 
  const addMovie = (title,description) => {
      setNewMovies([...newMovies, { 
        title, id: Math.random(),
        description, id: Math.random(),
        rating, id: Math.random(),
        image, id: Math.random(),
        video, id: Math.random()    
          }])
  } 

  
  const handleSubmitName = (e) => {
      e.preventDefault();
      
      addMovie(title,description,rating,image,video);
      setTitle('');
      setDescription('');
      setRating('');
      setImage('');
      setVideo('');
  }
  
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return(
    <div>
        <div className="App">
        {!show && <button className="button-adj" onClick={openModal}>Add a Movie</button>}
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <form className="add-movie-inputs" onSubmit={handleSubmitName}  >
          <p> Name:<input className="write-your-input" type="text" placeholder="Movie Name" value={title} required onChange={(props)=> setTitle(props.target.value)}/></p>
          <p> Description:<input className="write-your-input" type="text" placeholder="Movie Description" value={description} required onChange={(props)=> setDescription(props.target.value)}/></p>
          <p> Rating:<input className="write-your-input" type="text" placeholder="Movie Rating(1 -> 5)" value={rating} required onChange={(props)=> setRating(props.target.value)}/></p>
          <p>Image:<input className="write-your-input" type="text" placeholder="Movie Image (Image Link)" value={image} required onChange={(props)=> setImage(props.target.value)}/></p>
          <p>Trailer:<input className="write-your-input" type="text" placeholder="Movie Trailer (Video Link)" value={video} required onChange={(props)=> setVideo(props.target.value)}/></p>
           <input  type="submit"></input>
        </form>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
        <div>
          {MovieInfos.map(item => (
           <MovieModel 
           name={item.name} 
           image={item.image} 
           description={item.description} 
           video={item.video} 
           rating={item.rating}
           />
         ))}
         </div>
    
        {newMovies.map(newMovie => {
                  return (
                    <div className="newMovieS">
                    <MovieModel 
                    name={newMovie.title} 
                    image={newMovie.image} 
                    description={newMovie.description} 
                    video={newMovie.video} 
                    rating={newMovie.rating}
                    keyExtractor={item => item.id}
                    />
                   
                    </div>
                         )})}
     </div>
   );
 }
export default App



/***********************************************************************************************************************************************/




                    (props)
const { show, closeModal } = props;
  const [validName, setValidName]= useState('')