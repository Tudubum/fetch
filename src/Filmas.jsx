const Filmas = ({filmas, deleteFilm}) => {
    return (
        <div className="filmasCard">
          <img src={filmas.image} alt="filmas" />
          <div className="text">
            <h1>{filmas.name}</h1>
            <p>{filmas.metai}</p>
            <p>{filmas.zanras}</p>
            <p>{filmas.arMatytas ? 'Matytas' : 'Nematytas'}</p>
            <button onClick={() => deleteFilm(filmas.id)}>Delete<i className="fa fa-close"></i></button>
          </div>
        </div>
  
    );
  }
  
  export default Filmas;