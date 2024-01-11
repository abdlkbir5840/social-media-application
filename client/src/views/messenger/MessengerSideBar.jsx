import React from 'react'

function MessengerSideBar() {
  return (
    <div class="list-user col-12 col-lg-5 col-xl-3 border-right">
    <div class="px-4 d-none d-md-block">
      <div class="d-flex align-items-center">
        <div class="flex-grow-1">
          <input
            type="text"
            class="form-control my-3"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>

    <a
      href="#"
      class="list-group-item list-group-item-action border-0"
    >
      <div class="badge bg-success float-right">5</div>
      <div class="d-flex align-items-start">
        <img
          src="/assets/images/profile-3.jpg"
          class="rounded-circle  me-md-3"
          alt="Vanessa Tucker"
          width="40"
          height="40"
        />
        <div class="flex-grow-1 ml-3">
          Vanessa Tucker
          <div class="small">
            <span class="fas fa-circle chat-online"></span> Online
          </div>
        </div>
      </div>
    </a>
    
    <a
      href="#"
      class="list-group-item list-group-item-action border-0"
    >
      <div class="d-flex align-items-start">
        <img
          src="/assets/images/profile-2.jpg"
          class="rounded-circle me-md-3"
          alt="Sharon Lessman"
          width="40"
          height="40"
        />
        <div class="flex-grow-1 ml-3">
          Sharon Lessman
          <div class="small">
            <span class="fas fa-circle chat-online"></span> Online
          </div>
        </div>
      </div>
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action border-0"
    >
      <div class="d-flex align-items-start">
        <img
          src="/assets/images/profile-1.jpg"
          class="rounded-circle me-md-3"
          alt="Christina Mason"
          width="40"
          height="40"
        />
        <div class="flex-grow-1 ml-3">
          Christina Mason
          <div class="small">
            <span class="fas fa-circle chat-offline"></span> Offline
          </div>
        </div>
      </div>
    </a>
    <hr class="d-block d-lg-none mt-1 mb-0" />
  </div>
  )
}

export default MessengerSideBar


