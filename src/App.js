import React from "react";
import "./style.css"
import Jane from "./images/jane.jpeg"
import Star from "./components/Star"

export default class App extends React.Component {
    state = {
        firstName: "Jane",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    }

    toggleFavorite = () => {
        this.setState(prevContact => {
            return {
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    render() {
        return (
            <main>
            <article className="card">
                <img src={Jane} className="card-image" alt="jane pic" />
                <div className="card-info">
                    <Star isFilled={this.state.isFavorite} handleClick={this.toggleFavorite} />
                    <h2 className="card-name">{this.state.firstName} {this.state.lastName}</h2>
                    <p className="card-contact">{this.state.phone}</p>
                    <p className="card-contact">{this.state.email}</p>
                </div>
            </article>
        </main>
        )
    }
}