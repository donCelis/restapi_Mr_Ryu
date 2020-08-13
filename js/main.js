const URI = "https://jsonplaceholder.typicode.com/posts";

const getposts = async (URI) => {
  try {
    const data = await fetch(URI);
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const printPosts = async () => {
  let data = await getposts(URI);

  const template = ({ title, body, id }) => {
    return `
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${body}</p>
            <button class="btn btn-primary" onclick="viewMore(${id})">More</button>
            <button class="btn btn-info" onclick="viewCmts(${id})">Commenst</button>
          </div>
        </div>
      </div>
    `;
  };

  data.map((post) => {
    document.getElementById("posts").innerHTML += template(post);
  });

  /* data.forEach(post => {
    document.getElementById("posts").innerHTML += template(post);
  }); */
};

printPosts();

const viewMore = async (id) => {
  let data = await getposts(`${URI}/${id}`);
  console.log(data);
};

const viewCmts = async (id) => {
  let data = await getposts(`${URI}/${id}/comments`);
  console.log(data);
};