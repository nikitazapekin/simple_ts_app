

import React, { useState, useRef } from 'react';
import "./header.scss";

interface HeaderProps {
  fetchMovies: (username: string) => Promise<void>;
}

const Header = ({ fetchMovies }: HeaderProps) => {
  const [typedValue, setTypedValue] = useState('');
  const typedElem = useRef<HTMLInputElement>(null);

  return (
    <nav className="tt orange accent-3">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              ref={typedElem}
              onChange={(event) => {
                setTypedValue(event.target.value);
              }}
              id="search"
              type="search"
              required
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  console.log('Enter key pressed');
                  if (typedElem.current?.value) {
                    fetchMovies(typedElem.current.value);
                  }
                  console.log(typedValue);
                }
              }}
            />
            <label className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i
              className="material-icons"
              onClick={() => {
                if (typedElem.current?.value) {
                  typedElem.current.value = '';
                }
                setTypedValue('');
              }}
            >
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Header;

// for="search"