import React, { Component } from 'react';

class TeamItem extends Component {
    render() {
        return (
            <div class="team-member">
                <img class="mx-auto rounded-circle"  src={this.props.image} alt="" />
                <h4>{this.props.name}</h4>
                <p class="text-muted">{this.props.jobTitle}</p>
                <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TeamItem;