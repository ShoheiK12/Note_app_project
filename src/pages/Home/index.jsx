import NoteCard from '../../components/NoteCard/index';
import Pagination from '../../components/Pagination/index';
import './index.css';
import { Search } from 'lucide-react';

function Home() {
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
      <div className="home__notes">
        <NoteCard />
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
