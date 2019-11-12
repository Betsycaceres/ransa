export default () => {
  const divElem = document.createElement();
  const viewHome = `
    <div class="page">
    <div class="page-main">
      <div class="header py-4">
        <div class="container">
          <div class="d-flex">
            <a class="header-brand" href="./index.html">
              <img src="./demo/brand/tabler.svg" class="header-brand-img" alt="tabler logo">
            </a>
            <div class="d-flex order-lg-2 ml-auto">
              <div class="nav-item d-none d-md-flex">
                <a href="https://github.com/tabler/tabler" class="btn btn-sm btn-outline-primary" target="_blank">Source code</a>
              </div>
              <div class="dropdown d-none d-md-flex">
                <a class="nav-link icon" data-toggle="dropdown">
                  <i class="fe fe-bell"></i>
                  <span class="nav-unread"></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a href="#" class="dropdown-item d-flex">
                    <span class="avatar mr-3 align-self-center" style="background-image: url(demo/faces/male/41.jpg)"></span>
                    <div>
                      <strong>Nathan</strong> pushed new commit: Fix page load performance issue.
                      <div class="small text-muted">10 minutes ago</div>
                    </div>
                  </a>
                  <a href="#" class="dropdown-item d-flex">
                    <span class="avatar mr-3 align-self-center" style="background-image: url(demo/faces/female/1.jpg)"></span>
                    <div>
                      <strong>Alice</strong> started new task: Tabler UI design.
                      <div class="small text-muted">1 hour ago</div>
                    </div>
                  </a>
                  <a href="#" class="dropdown-item d-flex">
                    <span class="avatar mr-3 align-self-center" style="background-image: url(demo/faces/female/18.jpg)"></span>
                    <div>
                      <strong>Rose</strong> deployed new version of NodeJS REST Api V3
                      <div class="small text-muted">2 hours ago</div>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item text-center text-muted-dark">Mark all as read</a>
                </div>
              </div>
              <div class="dropdown">
                <a href="#" class="nav-link pr-0 leading-none" data-toggle="dropdown">
                  <span class="avatar" style="background-image: url(./demo/faces/female/25.jpg)"></span>
                  <span class="ml-2 d-none d-lg-block">
                    <span class="text-default">Jane Pearson</span>
                    <small class="text-muted d-block mt-1">Administrator</small>
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a class="dropdown-item" href="#">
                    <i class="dropdown-icon fe fe-user"></i> Profile
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="dropdown-icon fe fe-settings"></i> Settings
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="float-right"><span class="badge badge-primary">6</span></span>
                    <i class="dropdown-icon fe fe-mail"></i> Inbox
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="dropdown-icon fe fe-send"></i> Message
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    <i class="dropdown-icon fe fe-help-circle"></i> Need help?
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="dropdown-icon fe fe-log-out"></i> Sign out
                  </a>
                </div>
              </div>
            </div>
            <a href="#" class="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
              <span class="header-toggler-icon"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 ml-auto">
              <form class="input-icon my-3 my-lg-0">
                <input type="search" class="form-control header-search" placeholder="Search&hellip;" tabindex="1">
                <div class="input-icon-addon">
                  <i class="fe fe-search"></i>
                </div>
              </form>
            </div>
            <div class="col-lg order-lg-first">
              <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
                <li class="nav-item">
                  <a href="./index.html" class="nav-link"><i class="fe fe-home"></i> Home</a>
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0)" class="nav-link" data-toggle="dropdown"><i class="fe fe-box"></i> Interface</a>
                  <div class="dropdown-menu dropdown-menu-arrow">
                    <a href="./cards.html" class="dropdown-item ">Cards design</a>
                    <a href="./charts.html" class="dropdown-item ">Charts</a>
                    <a href="./pricing-cards.html" class="dropdown-item ">Pricing cards</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a href="javascript:void(0)" class="nav-link" data-toggle="dropdown"><i class="fe fe-calendar"></i> Components</a>
                  <div class="dropdown-menu dropdown-menu-arrow">
                    <a href="./maps.html" class="dropdown-item ">Maps</a>
                    <a href="./icons.html" class="dropdown-item ">Icons</a>
                    <a href="./store.html" class="dropdown-item ">Store</a>
                    <a href="./blog.html" class="dropdown-item ">Blog</a>
                    <a href="./carousel.html" class="dropdown-item ">Carousel</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a href="javascript:void(0)" class="nav-link" data-toggle="dropdown"><i class="fe fe-file"></i> Pages</a>
                  <div class="dropdown-menu dropdown-menu-arrow">
                    <a href="./profile.html" class="dropdown-item ">Profile</a>
                    <a href="./login.html" class="dropdown-item ">Login</a>
                    <a href="./register.html" class="dropdown-item ">Register</a>
                    <a href="./forgot-password.html" class="dropdown-item ">Forgot password</a>
                    <a href="./400.html" class="dropdown-item ">400 error</a>
                    <a href="./401.html" class="dropdown-item ">401 error</a>
                    <a href="./403.html" class="dropdown-item ">403 error</a>
                    <a href="./404.html" class="dropdown-item ">404 error</a>
                    <a href="./500.html" class="dropdown-item ">500 error</a>
                    <a href="./503.html" class="dropdown-item ">503 error</a>
                    <a href="./email.html" class="dropdown-item ">Email</a>
                    <a href="./empty.html" class="dropdown-item ">Empty page</a>
                    <a href="./rtl.html" class="dropdown-item ">RTL mode</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a href="./form-elements.html" class="nav-link"><i class="fe fe-check-square"></i> Forms</a>
                </li>
                <li class="nav-item">
                  <a href="./gallery.html" class="nav-link active"><i class="fe fe-image"></i> Gallery</a>
                </li>
                <li class="nav-item">
                  <a href="./docs/index.html" class="nav-link"><i class="fe fe-file-text"></i> Documentation</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">
              Gallery
            </h1>
            <div class="page-subtitle">1 - 12 of 1713 photos</div>
            <div class="page-options d-flex">
              <select class="form-control custom-select w-auto">
                <option value="asc">Newest</option>
                <option value="desc">Oldest</option>
              </select>
              <div class="input-icon ml-2">
                <span class="input-icon-addon">
                  <i class="fe fe-search"></i>
                </span>
                <input type="text" class="form-control w-10" placeholder="Search photo">
              </div>
            </div>
          </div>
          <div class="row row-cards">
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/grant-ritchie-338179-500.jpg" alt="Photo by Nathan Guerrero" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/male/41.jpg)"></div>
                  <div>
                    <div>Nathan Guerrero</div>
                    <small class="d-block text-muted">12 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 112</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 42</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/ilnur-kalimullin-218996-500.jpg" alt="Photo by Alice Mason" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/female/1.jpg)"></div>
                  <div>
                    <div>Alice Mason</div>
                    <small class="d-block text-muted">12 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 70</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 0</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/jakob-owens-224352-500.jpg" alt="Photo by Rose Bradley" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/female/18.jpg)"></div>
                  <div>
                    <div>Rose Bradley</div>
                    <small class="d-block text-muted">4 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 166</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 96</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/jeremy-bishop-330225-500.jpg" alt="Photo by Peter Richards" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/male/16.jpg)"></div>
                  <div>
                    <div>Peter Richards</div>
                    <small class="d-block text-muted">18 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 76</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 6</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/jonatan-pie-226191-500.jpg" alt="Photo by Wayne Holland" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/male/26.jpg)"></div>
                  <div>
                    <div>Wayne Holland</div>
                    <small class="d-block text-muted">16 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 106</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 36</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/josh-calabrese-66153-500.jpg" alt="Photo by Michelle Ross" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/female/7.jpg)"></div>
                  <div>
                    <div>Michelle Ross</div>
                    <small class="d-block text-muted">4 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 77</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 7</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/joshua-earle-157231-500.jpg" alt="Photo by Debra Beck" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/female/17.jpg)"></div>
                  <div>
                    <div>Debra Beck</div>
                    <small class="d-block text-muted">6 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 150</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 80</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/mahkeo-222765-500.jpg" alt="Photo by Phillip Peters" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/male/30.jpg)"></div>
                  <div>
                    <div>Phillip Peters</div>
                    <small class="d-block text-muted">17 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 153</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 83</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/matt-barrett-339981-500.jpg" alt="Photo by Jack Ruiz" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/male/32.jpg)"></div>
                  <div>
                    <div>Jack Ruiz</div>
                    <small class="d-block text-muted">15 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 143</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 73</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/nathan-anderson-297460-500.jpg" alt="Photo by Ronald Bradley" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/male/9.jpg)"></div>
                  <div>
                    <div>Ronald Bradley</div>
                    <small class="d-block text-muted">11 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 149</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 79</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/nathan-anderson-316188-500.jpg" alt="Photo by Kathleen Harper" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/female/8.jpg)"></div>
                  <div>
                    <div>Kathleen Harper</div>
                    <small class="d-block text-muted">16 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 164</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 94</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card p-3">
                <a href="javascript:void(0)" class="mb-3">
                  <img src="./demo/photos/nathan-dumlao-287713-500.jpg" alt="Photo by Bobby Knight" class="rounded">
                </a>
                <div class="d-flex align-items-center px-2">
                  <div class="avatar avatar-md mr-3" style="background-image: url(demo/faces/male/4.jpg)"></div>
                  <div>
                    <div>Bobby Knight</div>
                    <small class="d-block text-muted">6 days ago</small>
                  </div>
                  <div class="ml-auto text-muted">
                    <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i> 160</a>
                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 90</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-6 col-md-3">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">First link</a></li>
                  <li><a href="#">Second link</a></li>
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">Third link</a></li>
                  <li><a href="#">Fourth link</a></li>
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">Fifth link</a></li>
                  <li><a href="#">Sixth link</a></li>
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">Other link</a></li>
                  <li><a href="#">Last link</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            Premium and Open Source dashboard template with responsive and high quality UI. For Free!
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-auto ml-lg-auto">
            <div class="row align-items-center">
              <div class="col-auto">
                <ul class="list-inline list-inline-dots mb-0">
                  <li class="list-inline-item"><a href="./docs/index.html">Documentation</a></li>
                  <li class="list-inline-item"><a href="./faq.html">FAQ</a></li>
                </ul>
              </div>
              <div class="col-auto">
                <a href="https://github.com/tabler/tabler" class="btn btn-outline-primary btn-sm">Source code</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
            Copyright © 2018 <a href=".">Tabler</a>. Theme by <a href="https://codecalm.net" target="_blank">codecalm.net</a> All rights reserved.
          </div>
        </div>
      </div>
  
    `;
  
  divElem.innerHTML = viewHome;
  const contenedorUser = divElem.querySelector();
  contenedorUser.appendChild();
  
  return divElem;
};