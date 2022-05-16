export const getSavedsamuraiIds = () => {
    const savedsamuraiIds = localStorage.getItem('saved_samurais')
      ? JSON.parse(localStorage.getItem('saved_samurais'))
      : [];
  
    return savedsamuraiIds;
  };
  
  export const savesamuraiIds = (samuraiIdArr) => {
    if (samuraiIdArr.length) {
      localStorage.setItem('saved_samurais', JSON.stringify(samuraiIdArr));
    } else {
      localStorage.removeItem('saved_samurais');
    }
  };
  
  export const removesamuraiId = (samuraiId) => {
    const savedsamuraiIds = localStorage.getItem('saved_samurais')
      ? JSON.parse(localStorage.getItem('saved_samurais'))
      : null;
  
    if (!savedsamuraiIds) {
      return false;
    }
  
    const updatedSavedsamuraiIds = savedsamuraiIds?.filter((savedsamuraiId) => savedsamuraiId !== samuraiId);
    localStorage.setItem('saved_samurais', JSON.stringify(updatedSavedsamuraiIds));
  
    return true;
  };