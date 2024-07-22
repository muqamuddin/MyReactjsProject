import React from 'react'
const Lang = () => {
    const test = (e) => {
        localStorage.setItem('lang', e.target.value);
        window.location.reload();
      };
      const lang = localStorage.getItem('lang') || 'en';
  return (
    
    <div className="flex items-center justify-center my-4">
      <select className="rounded-md" onChange={this.test} value={lang}>
          <option value="en">English</option>
          <option value="da">Dari</option>
          <option value="pa">Pashto</option>
        </select>
      </div>
  )
}

export default Lang
