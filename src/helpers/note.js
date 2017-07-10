export const getMax = (arr, arrow) => {
  let max = 0;
  arr.forEach(item => {
    const val = arrow(item);
    if (val > max) {
      max = val;
    }
  });
  return max;
};

//
// TODO: Cache max value
//
export const getUID = items => {
  const max = getMax(items, item => item.id);
  return max + 1;
};

/**
 * Creates a new note
 * Assumes that there is just one level of nesting
 *   .content > p
 * and only one selection range
 * ** Not for Production usage **
 * @param {Array} items - List of all existing notes
 * @returns {object} Created Note
 */
export const generate = items => {
  const uid = getUID(items);
  const sel = window.getSelection();
  const p = sel.anchorNode.parentNode;
  p.contentEditable = true;
  window.document.execCommand("underline");
  p.removeAttribute("contentEditable");
  const u = sel.anchorNode.parentNode;
  u.outerHTML = `<span class="note" data-id="${uid}">${u.innerHTML}</span>`;
  const indexOfParagraph = [...p.parentNode.children].indexOf(p);
  const range = sel.getRangeAt(0);
  const el = getNoteById(uid);
  activate(el);
  return {
    id: uid,
    range: {
      indexOfParagraph,
      start: range.startOffset,
      end: range.endOffset
    },
    records: []
  };
};

/**
 * Extracts the note's element
 * @param {number} id 
 */
export const remove = id => {
  const el = getNoteById(id);
  el.outerHTML = el.innerHTML;
}

/**
 * Activates the selected note element
 * @param {Element} el Note Element
 * @returns {number} id of the activated note
 */
export const activate = el => {
  deactivate();
  const id = el.getAttribute("data-id");
  el.classList.toggle("active", true);
  return id;
};

/**
 * Deactivates all active notes
 */
export const deactivate = () => {
  const els = window.document.querySelectorAll(".note.active");
  [...els].forEach(el => {
    el.classList.toggle("active", false);
  });
};

/**
 * Gets note by ID
 * @param {number} id UID of the Note
 */
export const getNoteById = id => {
  const el = window.document.querySelector(`.note[data-id="${id}"]`);
  return el;
};
