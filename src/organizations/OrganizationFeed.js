import React, { Component } from 'react';
import './OrganizationFeed.css';
import OrganizationCard from './OrganizationCard';

export default class OrganizationFeed extends Component {

  state = {
    expandedHandle: null,
  }

  // Only allow expanding of a single card at a time
  toggleExpanded = (expandedHandle) => {
    this.setState({expandedHandle});
  }

  render() {
    const {organizations} = this.props;
    const {expandedHandle} = this.state;
    return (
      <div className="organization-list row">
        {organizations.length > 0 && organizations.map(
          (organization) => {
            // Filter out rows missing a twitter handle
            if (organization.twitterHandle) {
              return (
                <OrganizationCard
                  expandedHandle={expandedHandle}
                  key={organization.twitterHandle}
                  organization={organization}
                  toggleExpanded={this.toggleExpanded}
                />
              )
            }
          }
        )}
        {organizations.length === 0 && <p>No organizations found.</p>}
      </div>
    );
  }
}
