const newCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#comment-content').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (content) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

const deleteCommentHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  ?.addEventListener('submit', newCommentHandler);

document
  .querySelector('.comments')
  ?.addEventListener('click', function(event) {
    if (event.target.matches('.delete-comment-btn')) {
      deleteCommentHandler(event);
    }
  }); 