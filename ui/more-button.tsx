'use client'
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from '@mui/material/Link';



export default function MoreButton() {

    const handleChange = () => {
        console.log("More-Button clicked", );
    }

  return (
    <Link
      component="button"
      variant="body2"
      onClick={ handleChange }
      underline='none'
    >
      More >
    </Link>
  );
}