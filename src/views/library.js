import '../style/library.css';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Parse from 'parse/dist/parse.min.js';
import React, { useState } from 'react';
import { Button } from '@mui/material';

export default function Library() {

    const [posts, setPosts] = useState(null);

    async function fetchPost() {
        const query = new Parse.Query('Post');
        let queryResult = await query.findAll();
        console.log('posts: ', queryResult);

        setPosts(queryResult);
    }

    return(
        <div>
            <div className="header">
                <label>Biblioteca Hecate</label>
            </div>
            <div className='body'>
                <Button variant="contained" onClick={fetchPost}>Contained</Button>
                {posts !== null && (
                posts.map((post, i) => { 
                    return(
                        <div>
                            <p>{`Name: ${post.get('title')}`}</p>
                            <p>{`Autor: ${post.get('author')}`}</p>
                            <img src={post.get('cover')._url }/>
                        </div>
                    );
                })
            )}
            </div>
        </div>
    );
}
  