export default text => {
  const tmp = document.createElement('div');
  tmp.innerHTML = text;
  return tmp.textContent || tmp.innerText || '';
};
