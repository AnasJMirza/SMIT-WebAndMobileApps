import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className='final'>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div style={{ backgroundColor: 'black', color: 'white' }}>
              <h3 style={{fontFamily: 'italic', marginLeft: '15px', fontWeight: 'bold' }}>Title of a longer <br /> featured blog post</h3>
              <p style={{marginLeft: '15px'}} className="mul">Multiple lines of text that form the data informing new readers quickly and efficently about what's most interesting in this post's contents.</p>
              <h5 style={{ padding: '11px' }}>Continue reading...</h5>
            </div>
          </div>
        </div>
      </div>

      {/* ..........................cards..................................................  */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="card">
              {/* <img class="card-img-top" src="img_avatar1.png" alt="Card image">  */}
              <div className="card-body">
                <h5 style={{ color: 'blue' }}><b>World</b></h5>
                <h4 className="card-title"><b>Featured Post</b></h4>
                <text>Nov 12</text>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti qui quisquam laudantium hic quo, culpa molestias eius repellendus similique!</p>
                <a style={{ textDecoration: 'none' }} href="#">Continue reading</a>
              </div>
            </div>
          </div>


          <div className="col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 style={{ color: 'green' }}><b>Design</b></h5>
                <h4 className="card-title"><b>Post Title</b></h4>
                <text>Nov 11</text>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti qui quisquam laudantium hic quo, culpa molestias eius repellendus similique!</p>
                <a style={{ textDecoration: 'none' }} href="#">Continue reading</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ..................................firehose.........................................  */}

      <div style={{ marginTop: '30px' }} className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <h4 style={{fontFamily: 'italic', fontWeight: 'bold'}}>From the Firehose</h4>
            <hr />
            <h1 className="bold"><b>Sample blog post</b></h1>
            <text>January 1, 2014 by Mark</text> <br /> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos quae voluptatem magnam, dolores aliquid! Odio accusamus at ducimus doloribus iure blanditiis.</p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, provident nemo. Eligendi, optio voluptatum pariatur corporis asperiores excepturi corrupti. Sunt doloremque, voluptates animi molestiae eum, nulla quo aliquam corrupti harum dolorum nam repudiandae nisi delectus incidunt ipsam similique illum perspiciatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum itaque vitae quo, aliquid quam rerum quas magnam assumenda nostrum eveniet impedit, nihil dolorem molestias temporibus placeat aliquam.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae sit quo consequuntur laboriosam ex reiciendis quidem tempora! Minima repellendus voluptatum nostrum nisi ad, rerum a rem hic? Eos, mollitia voluptas.</p>
            <h2 className="bold"><b>Heading</b></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut minus nihil? Est, modi. Cum voluptatem quidem dolor? Cupiditate esse, consectetur ab corrupti autem perspiciatis optio nesciunt explicabo rerum ullam labore quam.</p>
            <h2 className="bold"><b>Sub-heading</b></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur inventore itaque cum esse eaque nam quis.</p>
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugiat saepe tenetur non mollitia nobis, reprehenderit enim in odit, ex, voluptate laudantium rerum alias iure praesentium consequatur quos doloribus dignissimos porro quaerat ullam.</p>
            <h2 className="bold"><b>Sub-heading</b></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fuga aut optio dignissimos ullam voluptatem deleniti commodi magni. Fuga consequuntur totam eius sit, a labore numquam ut in omnis, repellendus explicabo, nobis architecto. Accusantium, in. Sequi laborum aspernatur, natus optio repellat quos iste blanditiis voluptates commodi totam hic tenetur est.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita nostrum ut sed!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quam!</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem qui culpa fugiat non expedita nihil magnam officiis!</p>
            <ol>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita nostrum ut sed!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quam!</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ol>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem qui culpa fugiat non expedita nihil magnam officiis!</p>
            <br />
            <h1 className="bold"><b>Another blog post</b></h1>
            <text>December 23, 2013 by Jacob</text>
            <br /> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam accusamus error inventore veritatis doloremque temporibus ut consequuntur ex quam, tenetur voluptate distinctio soluta, aperiam maxime asperiores voluptatum. Facere doloremque ducimus perspiciatis id ipsa quia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum non ipsa dolores quis, est sequi ut odio enim consequuntur culpa, voluptas illum totam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi laborum sit earum ipsa! Similique, facere quo maiores unde voluptatem iusto! Eveniet sit minima facere, delectus exercitationem quisquam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor, perspiciatis necessitatibus modi quae molestias consequuntur iste qui amet repellendus assumenda vitae nulla commodi doloribus officiis iusto ipsa architecto totam, incidunt quidem?</p>
            <br />
            <h1 className="bold"><b>New feature</b></h1>
            <text>December 14, 2013 by Chris</text>
            <br /> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum recusandae labore debitis, consectetur voluptas laboriosam fuga nulla odit consequuntur laborum ducimus illo totam itaque error, natus dignissimos! Voluptas doloremque consequuntur iure mollitia sequi eos saepe officia ab, totam, quod odit obcaecati consectetur ut velit maxime eum.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita nostrum ut sed!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quam!</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi vitae nostrum quam, voluptatem cumque voluptates aperiam dicta maiores accusamus aut quidem ad vel qui eum earum accusantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum vero praesentium, corporis alias error.</p>


            <button type="button" style={{ borderRadius: '20px', marginTop: '30px' }} class="btn btn-outline-primary">Older</button>
            <button type="button" style={{ borderRadius: '20px', marginTop: '30px', marginLeft: '3px' }} class="btn btn-outline-dark">Newer</button>

          </div>




          <div className="col-sm-12 col-md-4">
            <div style={{ backgroundColor: 'rgb(240, 240, 240)', color: 'black' }}>
              <div style={{ padding: '8px' }}>
                <h6><i>About</i></h6>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, accusamus quae iure sit, rerum mollitia et vel tenetur vitae provident quisquam architecto?</p>
              </div>
            </div>
            <br />
            <h3 className="bold"><b>Archives</b></h3>
            <a className='anker' href="">March 2014</a>
            <a className='anker' href="">February 2014</a>
            <a className='anker' href="">January 2014</a>
            <a className='anker' href="">December 2013</a>
            <a className='anker' href="">November 2013</a>
            <a className='anker' href="">October 2013</a>
            <a className='anker' href="">September 2013</a>
            <a className='anker' href="">August 2013</a>
            <a className='anker' href="">July 2013</a>
            <a className='anker' href="">June 2013</a>
            <a className='anker' href="">May 2013</a>
            <a className='anker' href="">April 2013</a>
            <h3 className="bold"><b>Elsewhere</b></h3>
            <a className='anker' href="">Github</a>
            <a className='anker' href="">Twitter</a>
            <a className='anker' href="">Facebook</a>
          </div>



        </div>
      </div>


    </div>
  );
}

export default App;