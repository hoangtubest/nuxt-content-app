# Deploy

Có nhiều dịch vụ khác mà bạn có thể sử dụng để triển khai trang web tĩnh ngoài Surge. Dưới đây là một số dịch vụ phổ biến khác:

1. **GitHub Pages**: GitHub Pages cho phép bạn triển khai trang web tĩnh miễn phí từ kho lưu trữ GitHub của bạn. Đây là một tùy chọn phổ biến cho các trang web tĩnh và tài liệu dự án.

2. **Netlify**: Netlify cung cấp một nền tảng mạnh mẽ cho triển khai và quản lý trang web tĩnh. Nó có tích hợp CI/CD, hỗ trợ cho các kịch bản xây dựng phức tạp, và cung cấp nhiều tính năng hữu ích khác.

3. **Vercel**: Vercel tập trung vào việc triển khai các ứng dụng web và trang web tĩnh. Nó có khả năng triển khai tự động từ kho lưu trữ git và tích hợp đầy đủ với các công cụ phát triển phía máy chủ.

4. **AWS S3**: Amazon Web Services (AWS) Simple Storage Service (S3) là một dịch vụ lưu trữ đám mây mạnh mẽ cho các tệp tĩnh. Bạn có thể triển khai trang web tĩnh trực tiếp lên S3 và cấu hình tên miền tùy chỉnh.

5. **Firebase Hosting**: Firebase Hosting là một dịch vụ của Google cho phép bạn triển khai và quản lý trang web tĩnh và ứng dụng web đơn giản. Nó cung cấp tích hợp với nhiều tính năng Firebase khác.

6. **Bitbucket Pipelines**: Nếu bạn sử dụng Bitbucket, bạn có thể sử dụng Bitbucket Pipelines để triển khai trang web tĩnh từ kho lưu trữ Bitbucket của bạn.

7. **GitLab Pages**: Tương tự như GitHub Pages, GitLab Pages cho phép bạn triển khai trang web tĩnh từ kho lưu trữ GitLab.

Chọn dịch vụ phụ thuộc vào nhu cầu cụ thể của bạn, các tính năng mà bạn cần, và mức độ phức tạp của dự án của bạn. Một số dịch vụ này có kế nối với công cụ tích hợp liên tục (CI) để tự động triển khai khi bạn cập nhật mã nguồn, trong khi các dịch vụ khác có các tính năng bổ sung như quản lý tên miền và chứng chỉ SSL.

---

Deploying a static website to Surge is a straightforward process. Surge is a platform that allows you to quickly host static web content. Here are the steps to deploy your static website to Surge:

1. **Install Surge**: If you haven't already, you'll need to install the Surge command-line tool globally on your system. You can do this using npm (Node Package Manager) if you have Node.js installed:

   ```bash
   npm install -g surge
   ```

   This command installs Surge globally on your system, allowing you to use it from the command line.

2. **Navigate to Your Website's Directory**: Open your terminal and navigate to the directory where your static website files are located. Use the `cd` (change directory) command to move to your project folder. For example:

   ```bash
   cd path/to/your/static/website
   ```

3. **Build Your Website (if necessary)**: If your static website requires a build process (e.g., compiling SASS, transpiling JavaScript), you should run the build command now. Surge only hosts static files, so make sure your website is ready for deployment.

4. **Deploy to Surge**: Run the following command to deploy your website to Surge:

   ```bash
   surge
   ```

   This command will start an interactive prompt where you can choose a Surge domain for your website. If you haven't deployed with Surge before, it will prompt you to create an account or log in.

5. **Choose a Domain**: You'll be prompted to select or enter a domain for your website. You can choose a subdomain of `surge.sh`, or if you have a custom domain, you can configure it later.

6. **Deploy Your Website**: Once you've chosen a domain, Surge will begin uploading your static files to their servers. After the deployment is complete, you'll see a success message with the URL of your deployed website.

7. **Optional: Configure a Custom Domain (if needed)**: If you have a custom domain, you can configure it with Surge by running the following command:

   ```bash
   surge domainname.com
   ```

   Replace `domainname.com` with your actual domain name. Follow the prompts to set up DNS configuration.

8. **Access Your Website**: Your static website is now live on Surge. You can access it using the URL provided in the success message or the custom domain if you configured one.

That's it! Your static website is now deployed and accessible on Surge. Remember that Surge is designed for static content only, so it's not suitable for dynamic server-side applications.
