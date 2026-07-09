import { Link } from 'react-router-dom';
import './index.css';
import { ArrowLeft, Save } from 'lucide-react';

function NewNote() {
  return (
    <div className="new-note">
      <div className="new-note__header">
        <Link className="new-note__back-btn">
          <ArrowLeft className="new-note__back-icon" /> 戻る
        </Link>

        <div className="new-note__actions">
          <button className="new-note__save-btn">
            <Save className="new-note__save-icon" />
            保存
          </button>
        </div>
      </div>

      <div className="new-note__content">
        <div className="new-note__meta">
          <div className="new-note__title-container">
            <input
              type="text"
              placeholder="タイトルを入力..."
              className="new-note__title-input"
            />
          </div>
        </div>

        <div className="new-note__editor">
          <textarea
            placeholder="メモの内容を入力してください..."
            className="new-note__textarea"
          />
        </div>
      </div>
    </div>
  );
}

export default NewNote;
