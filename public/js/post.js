const editPostHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    
    // Show the edit modal
    document.getElementById('edit-modal').style.display = 'block';
    
    // Handle form submission
    document.getElementById('edit-post-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const title = document.getElementById('edit-title').value.trim();
      const content = document.getElementById('edit-content').value.trim();
      
      if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to update post');
        }
      }
    });
  }
};

const deletePostHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

// Close modal when clicking cancel
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('edit-modal').style.display = 'none';
});

document
  .querySelector('.edit-post-btn')
  ?.addEventListener('click', editPostHandler);

document
  .querySelector('.delete-post-btn')
  ?.addEventListener('click', deletePostHandler); 