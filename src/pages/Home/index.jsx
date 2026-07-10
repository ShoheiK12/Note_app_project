import NoteCard from '../../components/NoteCard/index';
import Pagination from '../../components/Pagination/index';
import './index.css';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/index';

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    fetchNotes(); 
  }, []);
  
  const fetchNotes = async() => {
    setLoading(true);
    const result = await fetch('http://localhost:3001/notes', {
      method: 'GET',
    });
    
    if (!result.ok)
      throw new Error(`メモ一覧の取得に失敗しました: ${result.status}`);
    
    const data = await result.json();
    setNotes(data.notes);
    setLoading(false);
  };
  
  const getContnets = () => {
    if (loading) {
      return (
        <div className="home__notes home__notes--loading">
          <Spinner />
        </div>
      );
    }
    
    return (
     <div className='home__notes'>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
     </div> 
    );
  };
  
  return (
    <div className="home">
      <div className="home__search">
        <div className="home__search-input">
          <Search className="home__search-icon" />
          <input
            type="text"
            placeholder="メモを検索..."
            className="home__search-field"
          />
          <button className="home__search-btn">
            検索
          </button>
        </div>
      </div>
      {getContnets()}
      <Pagination />
    </div>
  );
}

export default Home;
