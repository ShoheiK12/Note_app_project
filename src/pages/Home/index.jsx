import NoteCard from '../../components/NoteCard/index';
import Pagination from '../../components/Pagination/index';
import './index.css';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/index';
import notesAPI from '../../lib/api';
import { useNotification } from '../../contexts/NotificationContext';
import { useSearchParams } from 'react-router-dom';

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true); 
  
  const { showNotification } = useNotification();
  
  const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get: get the value of the specified key('page') from query-parameter-> ex: /?page=2, get 2. If null, put 1 in currentPage. 
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  
  const [totalPages, setTotalPages] = useState(1);
  
  // searchParams.get: get the value of the specified key('search') from query-parameter.If null, put '' in keyword. 
  const keyword = searchParams.get('search') || '';
  
  const [inputValue, setInputValue] = useState(keyword);
  
  const moveToPage = (page) => {
    setSearchParams({ page : page.toString() });
  };
  
  useEffect(() => {
    fetchNotes(); 
  }, [currentPage, keyword]);
  
  const fetchNotes = async() => {
    setLoading(true);
    try {
      const data = await notesAPI.getAll({
        page: currentPage,
        search: keyword, 
      });
      setNotes(data.notes);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error('メモの取得に失敗しました:', error);
      showNotification('error', 'メモの取得に失敗しました');
    } finally {
     setLoading(false); 
    }
  };
  
  const deleteNote = async (id) => {
    if (window.confirm('このメモを削除してもよろしいでしょうか？')) {
      try {
        await notesAPI.delete(id);
        await fetchNotes();
        showNotification('success', 'メモを削除しました');
      } catch (error) {
        console.error('メモの削除に失敗しました:', error);
        showNotification('error', 'メモの削除に失敗しました')
      }
    }
  };
  
  const handleSearch = () => {
    setSearchParams({ search: inputValue.trim(), page: 1 });
  };
  
  const getContnets = () => {
    if (loading) {
      return (
        <div className="home__notes home__notes--loading">
          <Spinner />
        </div>
      );
    }
    
    if (notes.length === 0) {
      return (
        <div className='home__notes home__notes--loading'>
          <p>メモがありません。新しいメモを作成してみましょう</p>
        </div>
      )
    }
    
    return (
     <div className='home__notes'>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={deleteNote} />
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="home__search-btn" onClick={handleSearch}>
            検索
          </button>
        </div>
      </div>
      {getContnets()}
      <Pagination 
        currentPage={currentPage} 
        onPageChange={moveToPage} 
        totalPages={totalPages}
      />
    </div>
  );
}

export default Home;
