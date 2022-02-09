import { Component } from 'react';
import './App.css';
import MainPage from '../main-page/main-page';
import Header from '../header/header';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';
import Subheader from '../subheader/subheader';
import CoffeeList from '../coffee-item-list/coffee-item-list';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import PageDescr from '../page-description/page-desc';
import CoffeeCard from '../coffee-card/coffee-card';




class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      data: [
        {id: 1020030, name: "Solimo Coffee Beans", weight: 2, country : "Kenya", price: 6.99, best: false},
        {id: 1020031, name: "AROMISTICO Coffee", weight: 2, country : "Brazil", price: 6.99, best: false},
        {id: 1020032, name: "Dalmayer Coffee", weight: 1, country : "Columbia", price: 6.99, best: true},
        {id: 1020033, name: "Nescafe", weight: 2, country : "Kenya", price: 6.99, best: true},
        {id: 1020034, name: "Nescafe", weight: 2, country : "Kenya", price: 6.99, best: false},
        {id: 1020035, name: "Solimo Coffee Beans", weight: 2, country : "Kenya", price: 6.99, best: true},
        {id: 1020036, name: "AROMISTICO Coffee", weight: 2, country : "Brazil", price: 6.99, best: false},
        {id: 1020037, name: "Dalmayer Coffee", weight: 1, country : "Columbia", price: 6.99, best: false},
        {id: 1020038, name: "Nescafe", weight: 2, country : "Kenya", price: 6.99, best: false},
      ],
      term: '',
      filter: 'all'
    }
  }

  searchCoffee = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterCoffee = (items, filter) => {
    switch (filter) {
      case 'Brazil':
        return items.filter(item => item.country === 'Brazil');
      case 'Kenya':
        return items.filter(item => item.country === 'Kenya'); 
      case 'Columbia':
        return items.filter(item => item.country === 'Columbia'); 
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render () {
    const {data, term, filter} = this.state;
    const bestCofee = this.state.data.filter(item => item.best);
    const visibleData = this.filterCoffee(this.searchCoffee(data, term), filter);
    return (
      <div className="App">
        <div className='firstpage'>
          <MainPage/>
          <Header/>
          <AboutUs/>
          <OurBest data={bestCofee}/>
          <Footer/>
        </div>
        <div className='secondpage'>
          <Subheader/>
          <Header/>
          <PageDescr/>
          <div className='search-filter-panel'>
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>  
            <Filter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          <CoffeeList data={visibleData}/>
          <Footer/>
        </div>
        <div className='thirdpage'>
          <Subheader/>
          <Header/>
          <CoffeeCard data={data}/>
        </div>
      </div>
    );  
  }
}

export default App;
