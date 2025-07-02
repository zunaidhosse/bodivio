# How to Deploy Your PWA on GitHub Pages

Follow these steps to upload your project to GitHub and host it live using GitHub Pages.

## Step 1: Create a GitHub Repository

1.  **Sign up or Log in** to [GitHub](https://github.com).
2.  Click the **`+`** icon in the top-right corner and select **"New repository"**.
3.  **Repository name:** Give your project a name (e.g., `bodivio-fitness-pwa`).
4.  **Description:** (Optional) Add a brief description.
5.  **Public/Private:** Select **"Public"**. GitHub Pages are free for public repositories.
6.  Click **"Create repository"**.

## Step 2: Upload Your Project Files

You can upload your files using the GitHub web interface (easiest for beginners) or via the command line with Git.

### Method A: Using the Web Interface

1.  In your new repository, click the **"Add file"** button and select **"Upload files"**.
2.  **Drag and drop** all your project files and folders (`index.html`, `app.js`, `service-worker.js`, `manifest.json`, the `styles`, `pages`, `data` folders, etc.) into the upload area.
3.  Once all files are uploaded, scroll down to the **"Commit changes"** section.
4.  Add a commit message (e.g., "Initial project upload").
5.  Click **"Commit changes"**.

### Method B: Using Git Command Line (More Advanced)

If you have Git installed on your computer:
1.  Open a terminal or command prompt in your project's root directory.
2.  Initialize a local Git repository:
    ```bash
    git init
    ```
3.  Add all your files to be tracked:
    ```bash
    git add .
    ```
4.  Make your first commit:
    ```bash
    git commit -m "First commit: Initial project upload"
    ```
5.  Link your local repository to the remote one on GitHub (copy the commands from your new GitHub repo's page):
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    ```
6.  Push your code to GitHub:
    ```bash
    git push -u origin main
    ```

## Step 3: Enable GitHub Pages

1.  In your GitHub repository, go to the **"Settings"** tab.
2.  In the left sidebar, click on **"Pages"**.
3.  Under the "Build and deployment" section, for the **"Source"**, select **"Deploy from a branch"**.
4.  Under "Branch", select `main` (or `master` if that's your default branch) and keep the folder as `/ (root)`.
5.  Click **"Save"**.

## Step 4: Access Your Live Site

GitHub will now build and deploy your site. This might take a few minutes.

-   Once it's ready, the top of the "Pages" settings will show a green banner with the URL of your live site, like `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.
-   Visit this URL in your browser to see your PWA in action!

You can now test the "Add to Home Screen" functionality and offline capabilities. Any future changes you push to your `main` branch will automatically be updated on the live site.

