import React, { PureComponent } from "react";
import "./style.sass";

export default class Table extends PureComponent {
  
  state = {...this.props};

  componentDidMount() {
    console.log('didMount');

    const selectItem = setInterval(() => {
      let randomInt = Math.round(Math.random() * this.state.tableData.length);

      console.log('selectItem');

      this.setState(
        {
          tableData: this.state.tableData.map((item, index) => {
            if(index === randomInt) item.selected = true;
            return item;
          })
        },
        () => {
          let selectedItems = this.state.tableData.filter((item) => item.selected === true);

          selectedItems.length === Math.ceil(this.state.tableData.length / 2) ? this.setState( { borderWidth: '10px' } ) : false;

          selectedItems.length === this.state.tableData.length ? this.setState( { borderWidth: '20px' } ) : false;
        });
    }, 2000);

    this.setState({
      selectItem,
    });
  }

  componentWillUnmount() {
    console.log(`in componentWillUnmount List`);

    clearInterval(this.state.selectItem);
  }

  render() {

    const { tableData = [], borderWidth } = this.state;

    return  tableData.length ? (
      <table style={{ borderWidth: borderWidth }}>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className={item.selected === true ? 'selected' : ''}>
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  }
}