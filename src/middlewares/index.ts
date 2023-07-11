import { handleError } from "./handleError.middleware";
import { validateBody } from "./validateBody.middleware";
import { validateAdminMiddleware } from "./validateAdmin.middlewares";
import { validateTokenMiddleware } from "./validateToken.middlewares";
import { validateEmailMiddleware } from "./validateEmail.middlewares";
import { validateIdMiddleware } from "./validateId.middlewares";

export default {
    handleError,
    validateBody,
    validateAdminMiddleware,
    validateTokenMiddleware,
    validateEmailMiddleware,
    validateIdMiddleware
};
