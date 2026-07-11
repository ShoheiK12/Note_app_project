const baseUrl = 'http://localhost:3001';

const defaultOptions = {
  headers: {
    'Content-type': 'application/json',
  },
};

const apiFetch = async (url, options) => {
  return await fetch(`${baseUrl}${url}`, {
    ...defaultOptions,
    ...options,
  });
};

const notesAPI = {
  // Notes view function
  async getAll() {
    const result = await apiFetch('/notes', { method: 'GET' });
    if (!result.ok)
      throw new Error(`メモ一覧の取得に失敗しました: ${result.status}`);
    
    return result.json();
  },
  
  // Notes create function
  async create(data) {
    const result = await apiFetch('/notes', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!result.ok)
      throw new Error(`メモの作成に失敗しました: ${result.status}`);
    
    return result.json;
  },
};

export default notesAPI;