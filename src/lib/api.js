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
  // View notes function
  async getAll() {
    const result = await apiFetch('/notes', { method: 'GET' });
    if (!result.ok)
      throw new Error(`メモ一覧の取得に失敗しました: ${result.status}`);
    
    return result.json();
  },
  
  // Create notes function
  async create(data) {
    const result = await apiFetch('/notes', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!result.ok)
      throw new Error(`メモの作成に失敗しました: ${result.status}`);
    
    return result.json;
  },
  
  // Get notes function
  async getById(id) {
    const result = await apiFetch(`/notes/${id}`, { method : 'GET' });
    if (!result.ok)
      throw new Error(`メモの取得に失敗しました: ${result.status}`);
    
    return result.json();
  },
  
  // Update notes function
  async update(id, data) {
    const result = await apiFetch(`/notes/${id}`, {
      method : 'PUT',
      body: JSON.stringify(data),
    });
    if (!result.ok)
      throw new Error(`メモの更新に失敗しました: ${result.status}`);
    
    return result.json();
  },
  
  // Delete notes function
  async delete(id) {
    const result = await apiFetch(`/notes/${id}`, { method : 'DELETE' });
    if (!result.ok)
      throw new Error(`メモの削除に失敗しました: ${result.status}`);
    
    return result.json();
  },
};

export default notesAPI;