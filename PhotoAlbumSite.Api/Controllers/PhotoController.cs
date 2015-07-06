using PhotoAlbumSite.Api.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace PhotoAlbumSite.Api.Controllers
{
    public class PhotoController : ApiController
    {
        public ServiceResult<ImageModel> Get(string url)
        {
            var result = new ServiceResult<ImageModel>() { Result = new ImageModel() };

            try
            {
                var webClient = new WebClient();
                result.Result.Extension = Path.GetExtension(url).Substring(1);
                var image = webClient.DownloadData(url);
                result.Result.Image64String = Convert.ToBase64String(image);
            }
            catch (Exception ex)
            {
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
    }
}