import React, { Component } from 'react';

export default class MainBody extends Component{
    render(){
        const{
            articles,
            title,
            summary
        } = this.data.toJS();

        return(
            <section>
            <header>
                <h1>Articles</h1>
                <input 
                    placeholder="Title"
                    vallue={ title }
                    onChange={ this.onChangeTitle }
                />
                <input 
                    placeholder="Summary"
                    vallue={ summary }
                />
                <button onClick={ this.onClickAdd }>Add</button>
            </header>
            <article>
                <ul>
                    {articles.map(i => (
                        <li key={ i.id }>
                            <a  
                                href=""
                                onClick={ this.onClickToggle.bind(null, i.id) }
                            >
                            { i.title }
                            </a>
                            &nbsp;
                            <a  
                                href=""
                                onClick={ this.onClickRemove.bind(null, i.id) }
                            >
                                x
                            </a>
                            <p style={{ display: i.display }}> 
                                { i.summary }
                            </p>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
        )
    };
}
