import React from 'react'
import { Input, Icon } from 'antd';

export default class TopicSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  emitEmpty = () => {
    this.searchInput.focus();
    this.setState({ search: '' });
  }
  onChange = (e) => {
    this.setState({ search: e.target.value});
  }
  onEnter = (e) => {
    e.preventDefault()
    const {search} = this.state
    this.props.onSearch(search)
  }

  render() {
    const { search } = this.state;
    const suffix = search ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div className='.topic-search'>
        <form onSubmit={this.onEnter}>
            <Input
              placeholder="e.g. javascript, react"
              prefix={<Icon type="tags-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={suffix}
              value={search}
              onChange={this.onChange}
              ref={node => this.searchInput = node}
            />
          </form >
      </div>
    );
  }
}