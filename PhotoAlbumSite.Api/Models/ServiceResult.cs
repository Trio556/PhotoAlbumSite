using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhotoAlbumSite.Api.Models
{
    public class ServiceResult<T>
    {
        public T Result { get; set; }
        public string ErrorMessage { get; set; }
    }
}