import { ArrowLeft, Save, Trash2, Calendar, Clock } from 'lucide-react';
import './index.css';
import { Link } from 'react-router-dom';

function NoteDetail() {
  return (
    <div className="note-detail">
      <div className="note-detail__header">
        <Link className="note-detail__back-btn">
          <ArrowLeft className="note-detail__back-icon" /> 戻る
        </Link>
        <div className="note-detail__actions">
          <button className="note-detail__save-btn">
            <Save className="note-detail__save-icon" />
            保存
          </button>
          <button className="note-detail__action-btn note-detail__action-btn--danger">
            <Trash2 className="note-detail__action-icon" />
          </button>
        </div>
      </div>
      <div className="note-detail__content">
        <div className="note-detail__meta">
          <input
            type="text"
            className="note-detail__title-input"
            placeholder="タイトルを入力..."
          />
          <div className="note-detail__info">
            <div className="note-detail__info-item">
              <Calendar className="note-detail__info-icon" />
              作成:
            </div>
            <div className="note-detail__info-item">
              <Clock className="note-detail__info-icon" />
              更新:
            </div>
          </div>
        </div>
        <div className="note-detail__body">
          <textarea
            className="note-detail__textarea"
            placeholder="メモの内容を入力してください..."
          />
        </div>
      </div>
    </div>
  );
}

export default NoteDetail;
