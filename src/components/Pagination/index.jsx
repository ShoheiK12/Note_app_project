import { ChevronLeft, ChevronRight } from 'lucide-react';
import './index.css';

function Pagination({ currentPage, onPageChange, totalPages }) {
  if (totalPages <= 1) return null;
   
  return (
    <div className="pagination">
      <button 
        className="pagination__nav"
        onClick={() => onPageChange(currentPage - 1 )}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="pagination__nav-icon" />
        前へ
      </button>

      <div className="pagination__info">
        {currentPage} / {totalPages}
      </div>

      <button 
        className="pagination__nav"
        onClick={() => onPageChange(currentPage + 1 )}
        disabled={currentPage === totalPages}
      >
        次へ
        <ChevronRight className="pagination__nav-icon" />
      </button>
    </div>
  );
}

export default Pagination;
