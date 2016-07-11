import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDkNVm_GAzKSXuaTjixeAqEJMaQeMO0Qjg';


// functional component vs class component: state is needed
//  Create a new component. This component should produce
// some HTML
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // console.log(videos);
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
      // this.setState({videos: videos});
    })
  }
  // <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
  render() {
    // throttle
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          // onVideoSelect={(foo) => {debugger;this.setState({foo})}}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}  />
      </div>
    )
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
