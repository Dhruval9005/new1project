import axios from "axios";
import keys from "../../config/keys";
import { useContext, useEffect, useState } from "react";

const URl = keys.server_url + "/phons";