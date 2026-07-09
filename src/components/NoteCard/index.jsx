import { Link } from 'react-router-dom';
import './index.css';
import { Trash2 } from 'lucide-react';

function NoteCard() {
  const note = {
    id: 1,
    title: 'サンプルメモ1',
    content: 'これはサンプルのメモです。UIの確認用に表示されています。',
    updatedAt: '2025/01/15',
  };

  return (
    <Link className="note-card-link">
      <div className="note-card">
        <div className="note-card__content">
          <h3 className="note-card__title">{note.title}</h3>
          <p className="note-card__body">{note.content}</p>
        </div>
        <div className="note-card__footer">
          <span className="note-card__date">{note.updatedAt}</span>
          <div className="note-card__actions">
            <button className="note-card__delete">
              <Trash2 className="note-card__icon" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NoteCard;
