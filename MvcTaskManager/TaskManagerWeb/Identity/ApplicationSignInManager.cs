﻿
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MvcTaskManager.Identity;
using System;
using System.Collections.Generic;

namespace TaskManagerWeb.Identity
{
    namespace MvcTaskManager.Identity
    {
        public class ApplicationSignInManager : SignInManager<ApplicationUser>
        {
            public ApplicationSignInManager(ApplicationUserManager applicationUserManager, IHttpContextAccessor httpContextAccessor, 
                IUserClaimsPrincipalFactory<ApplicationUser> userClaimsPrincipalFactory, IOptions<IdentityOptions> options, 
                ILogger<ApplicationSignInManager> logger, IAuthenticationSchemeProvider schemes,IUserConfirmation<ApplicationUser> userConfirmation) : 
                base(applicationUserManager, httpContextAccessor, userClaimsPrincipalFactory, options, logger, schemes, userConfirmation)
            {

            }
        }
    }
}
